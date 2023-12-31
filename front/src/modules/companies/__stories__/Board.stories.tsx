import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';

import { EntityBoard } from '@/ui/board/components/EntityBoard';
import { RecoilScope } from '@/ui/utilities/recoil-scope/components/RecoilScope';
import { SortOrder } from '~/generated/graphql';
import { opportunitiesBoardOptions } from '~/pages/opportunities/opportunitiesBoardOptions';
import { ComponentDecorator } from '~/testing/decorators/ComponentDecorator';
import { graphqlMocks } from '~/testing/graphqlMocks';

import { HooksCompanyBoard } from '../components/HooksCompanyBoard';
import { CompanyBoardRecoilScopeContext } from '../states/recoil-scope-contexts/CompanyBoardRecoilScopeContext';

const meta: Meta<typeof EntityBoard> = {
  title: 'Modules/Companies/Board',
  component: EntityBoard,
  decorators: [
    (Story) => (
      <RecoilScope SpecificContext={CompanyBoardRecoilScopeContext}>
        <HooksCompanyBoard
          orderBy={[
            {
              createdAt: SortOrder.Asc,
            },
          ]}
        />
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </RecoilScope>
    ),
    ComponentDecorator,
  ],
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;
type Story = StoryObj<typeof EntityBoard>;

export const OneColumnBoard: Story = {
  render: (args) => (
    <EntityBoard {...args} boardOptions={opportunitiesBoardOptions} />
  ),
};
