import PropTypes from 'prop-types';

export default {
  // General
  data: PropTypes.any,
  loading: PropTypes.bool,
  showPagination: PropTypes.bool,
  showPaginationTop: PropTypes.bool,
  showPaginationBottom: PropTypes.bool,
  showPageSizeOptions: PropTypes.bool,
  pageSizeOptions: PropTypes.array,
  defaultPageSize: PropTypes.number,
  showPageJump: PropTypes.bool,
  collapseOnSortingChange: PropTypes.bool,
  collapseOnPageChange: PropTypes.bool,
  collapseOnDataChange: PropTypes.bool,
  freezeWhenExpanded: PropTypes.bool,
  sortable: PropTypes.bool,
  resizable: PropTypes.bool,
  filterable: PropTypes.bool,
  defaultSortDesc: PropTypes.bool,
  defaultSorted: PropTypes.array,
  defaultFiltered: PropTypes.array,
  defaultResized: PropTypes.array,
  defaultExpanded: PropTypes.object,
  defaultFilterMethod: PropTypes.func,
  defaultSortMethod: PropTypes.func,

  // Controlled State Callbacks
  onPageChange: PropTypes.func,
  onPageSizeChange: PropTypes.func,
  onSortedChange: PropTypes.func,
  onFilteredChange: PropTypes.func,
  onResizedChange: PropTypes.func,
  onExpandedChange: PropTypes.func,

  // Pivoting
  pivotBy: PropTypes.array,

  // Key Constants
  pivotValKey: PropTypes.string,
  pivotIDKey: PropTypes.string,
  subRowsKey: PropTypes.string,
  aggregatedKey: PropTypes.string,
  nestingLevelKey: PropTypes.string,
  originalKey: PropTypes.string,
  indexKey: PropTypes.string,
  groupedByPivotKey: PropTypes.string,

  // Server-side Callbacks
  onFetchData: PropTypes.func,

  // Classes
  className: PropTypes.string,
  style: PropTypes.object,

  // Component decorators
  getProps: PropTypes.func,
  getTableProps: PropTypes.func,
  getTheadGroupProps: PropTypes.func,
  getTheadGroupTrProps: PropTypes.func,
  getTheadGroupThProps: PropTypes.func,
  getTheadProps: PropTypes.func,
  getTheadTrProps: PropTypes.func,
  getTheadThProps: PropTypes.func,
  getTheadFilterProps: PropTypes.func,
  getTheadFilterTrProps: PropTypes.func,
  getTheadFilterThProps: PropTypes.func,
  getTbodyProps: PropTypes.func,
  getTrGroupProps: PropTypes.func,
  getTrProps: PropTypes.func,
  getTdProps: PropTypes.func,
  getTfootProps: PropTypes.func,
  getTfootTrProps: PropTypes.func,
  getTfootTdProps: PropTypes.func,
  getPaginationProps: PropTypes.func,
  getLoadingProps: PropTypes.func,
  getNoDataProps: PropTypes.func,
  getResizerProps: PropTypes.func,

  // Global Column Defaults
  columns: PropTypes.arrayOf(PropTypes.shape({
    // Renderers
    Cell: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.elementType]),
    Header: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.elementType]),
    Footer: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.elementType]),
    Aggregated: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.elementType]),
    Pivot: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.elementType]),
    PivotValue: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.elementType]),
    Expander: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.elementType]),
    Filter: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),

    // All Columns
    sortable: PropTypes.bool, // use table default
    resizable: PropTypes.bool, // use table default
    filterable: PropTypes.bool, // use table default
    show: PropTypes.bool,
    minWidth: PropTypes.number,
    minResizeWidth: PropTypes.number,

    // Cells only
    className: PropTypes.string,
    style: PropTypes.object,
    getProps: PropTypes.func,

    // Pivot only
    aggregate: PropTypes.func,

    // Headers only
    headerClassName: PropTypes.string,
    headerStyle: PropTypes.object,
    getHeaderProps: PropTypes.func,

    // Footers only
    footerClassName: PropTypes.string,
    footerStyle: PropTypes.object,
    getFooterProps: PropTypes.func,
    filterMethod: PropTypes.func,
    filterAll: PropTypes.bool,
    sortMethod: PropTypes.func
  })),

  // Global Expander Column Defaults
  expanderDefaults: PropTypes.shape({
    sortable: PropTypes.bool,
    resizable: PropTypes.bool,
    filterable: PropTypes.bool,
    width: PropTypes.number
  }),

  pivotDefaults: PropTypes.object,

  // Text
  previousText: PropTypes.node,
  nextText: PropTypes.node,
  loadingText: PropTypes.node,
  noDataText: PropTypes.node,
  pageText: PropTypes.node,
  ofText: PropTypes.node,
  rowsText: PropTypes.node,
  pageJumpText: PropTypes.node,
  rowsSelectorText: PropTypes.node,

  // Components
  TableComponent: PropTypes.elementType,
  TheadComponent: PropTypes.elementType,
  TbodyComponent: PropTypes.elementType,
  TrGroupComponent: PropTypes.elementType,
  TrComponent: PropTypes.elementType,
  ThComponent: PropTypes.elementType,
  TdComponent: PropTypes.elementType,
  TfootComponent: PropTypes.elementType,
  FilterComponent: PropTypes.elementType,
  ExpanderComponent: PropTypes.elementType,
  PivotValueComponent: PropTypes.elementType,
  AggregatedComponent: PropTypes.elementType,
  // this is a computed default generated using
  PivotComponent: PropTypes.elementType,
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: PropTypes.elementType,
  PreviousComponent: PropTypes.elementType,
  NextComponent: PropTypes.elementType,
  LoadingComponent: PropTypes.elementType,
  NoDataComponent: PropTypes.elementType,
  ResizerComponent: PropTypes.elementType,
  PadRowComponent: PropTypes.elementType
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9wVHlwZXMuanMiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiZGF0YSIsImFueSIsImxvYWRpbmciLCJib29sIiwic2hvd1BhZ2luYXRpb24iLCJzaG93UGFnaW5hdGlvblRvcCIsInNob3dQYWdpbmF0aW9uQm90dG9tIiwic2hvd1BhZ2VTaXplT3B0aW9ucyIsInBhZ2VTaXplT3B0aW9ucyIsImFycmF5IiwiZGVmYXVsdFBhZ2VTaXplIiwibnVtYmVyIiwic2hvd1BhZ2VKdW1wIiwiY29sbGFwc2VPblNvcnRpbmdDaGFuZ2UiLCJjb2xsYXBzZU9uUGFnZUNoYW5nZSIsImNvbGxhcHNlT25EYXRhQ2hhbmdlIiwiZnJlZXplV2hlbkV4cGFuZGVkIiwic29ydGFibGUiLCJyZXNpemFibGUiLCJmaWx0ZXJhYmxlIiwiZGVmYXVsdFNvcnREZXNjIiwiZGVmYXVsdFNvcnRlZCIsImRlZmF1bHRGaWx0ZXJlZCIsImRlZmF1bHRSZXNpemVkIiwiZGVmYXVsdEV4cGFuZGVkIiwib2JqZWN0IiwiZGVmYXVsdEZpbHRlck1ldGhvZCIsImZ1bmMiLCJkZWZhdWx0U29ydE1ldGhvZCIsIm9uUGFnZUNoYW5nZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJvblNvcnRlZENoYW5nZSIsIm9uRmlsdGVyZWRDaGFuZ2UiLCJvblJlc2l6ZWRDaGFuZ2UiLCJvbkV4cGFuZGVkQ2hhbmdlIiwicGl2b3RCeSIsInBpdm90VmFsS2V5Iiwic3RyaW5nIiwicGl2b3RJREtleSIsInN1YlJvd3NLZXkiLCJhZ2dyZWdhdGVkS2V5IiwibmVzdGluZ0xldmVsS2V5Iiwib3JpZ2luYWxLZXkiLCJpbmRleEtleSIsImdyb3VwZWRCeVBpdm90S2V5Iiwib25GZXRjaERhdGEiLCJjbGFzc05hbWUiLCJzdHlsZSIsImdldFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldFRoZWFkR3JvdXBQcm9wcyIsImdldFRoZWFkR3JvdXBUclByb3BzIiwiZ2V0VGhlYWRHcm91cFRoUHJvcHMiLCJnZXRUaGVhZFByb3BzIiwiZ2V0VGhlYWRUclByb3BzIiwiZ2V0VGhlYWRUaFByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJQcm9wcyIsImdldFRoZWFkRmlsdGVyVHJQcm9wcyIsImdldFRoZWFkRmlsdGVyVGhQcm9wcyIsImdldFRib2R5UHJvcHMiLCJnZXRUckdyb3VwUHJvcHMiLCJnZXRUclByb3BzIiwiZ2V0VGRQcm9wcyIsImdldFRmb290UHJvcHMiLCJnZXRUZm9vdFRyUHJvcHMiLCJnZXRUZm9vdFRkUHJvcHMiLCJnZXRQYWdpbmF0aW9uUHJvcHMiLCJnZXRMb2FkaW5nUHJvcHMiLCJnZXROb0RhdGFQcm9wcyIsImdldFJlc2l6ZXJQcm9wcyIsImNvbHVtbnMiLCJhcnJheU9mIiwic2hhcGUiLCJDZWxsIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsImVsZW1lbnRUeXBlIiwiSGVhZGVyIiwiRm9vdGVyIiwiQWdncmVnYXRlZCIsIlBpdm90IiwiUGl2b3RWYWx1ZSIsIkV4cGFuZGVyIiwiRmlsdGVyIiwic2hvdyIsIm1pbldpZHRoIiwibWluUmVzaXplV2lkdGgiLCJhZ2dyZWdhdGUiLCJoZWFkZXJDbGFzc05hbWUiLCJoZWFkZXJTdHlsZSIsImdldEhlYWRlclByb3BzIiwiZm9vdGVyQ2xhc3NOYW1lIiwiZm9vdGVyU3R5bGUiLCJnZXRGb290ZXJQcm9wcyIsImZpbHRlck1ldGhvZCIsImZpbHRlckFsbCIsInNvcnRNZXRob2QiLCJleHBhbmRlckRlZmF1bHRzIiwid2lkdGgiLCJwaXZvdERlZmF1bHRzIiwicHJldmlvdXNUZXh0Iiwibm9kZSIsIm5leHRUZXh0IiwibG9hZGluZ1RleHQiLCJub0RhdGFUZXh0IiwicGFnZVRleHQiLCJvZlRleHQiLCJyb3dzVGV4dCIsInBhZ2VKdW1wVGV4dCIsInJvd3NTZWxlY3RvclRleHQiLCJUYWJsZUNvbXBvbmVudCIsIlRoZWFkQ29tcG9uZW50IiwiVGJvZHlDb21wb25lbnQiLCJUckdyb3VwQ29tcG9uZW50IiwiVHJDb21wb25lbnQiLCJUaENvbXBvbmVudCIsIlRkQ29tcG9uZW50IiwiVGZvb3RDb21wb25lbnQiLCJGaWx0ZXJDb21wb25lbnQiLCJFeHBhbmRlckNvbXBvbmVudCIsIlBpdm90VmFsdWVDb21wb25lbnQiLCJBZ2dyZWdhdGVkQ29tcG9uZW50IiwiUGl2b3RDb21wb25lbnQiLCJQYWdpbmF0aW9uQ29tcG9uZW50IiwiUHJldmlvdXNDb21wb25lbnQiLCJOZXh0Q29tcG9uZW50IiwiTG9hZGluZ0NvbXBvbmVudCIsIk5vRGF0YUNvbXBvbmVudCIsIlJlc2l6ZXJDb21wb25lbnQiLCJQYWRSb3dDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7O0FBRUEsZUFBZTtBQUNiO0FBQ0FDLFFBQU1ELFVBQVVFLEdBRkg7QUFHYkMsV0FBU0gsVUFBVUksSUFITjtBQUliQyxrQkFBZ0JMLFVBQVVJLElBSmI7QUFLYkUscUJBQW1CTixVQUFVSSxJQUxoQjtBQU1iRyx3QkFBc0JQLFVBQVVJLElBTm5CO0FBT2JJLHVCQUFxQlIsVUFBVUksSUFQbEI7QUFRYkssbUJBQWlCVCxVQUFVVSxLQVJkO0FBU2JDLG1CQUFpQlgsVUFBVVksTUFUZDtBQVViQyxnQkFBY2IsVUFBVUksSUFWWDtBQVdiVSwyQkFBeUJkLFVBQVVJLElBWHRCO0FBWWJXLHdCQUFzQmYsVUFBVUksSUFabkI7QUFhYlksd0JBQXNCaEIsVUFBVUksSUFibkI7QUFjYmEsc0JBQW9CakIsVUFBVUksSUFkakI7QUFlYmMsWUFBVWxCLFVBQVVJLElBZlA7QUFnQmJlLGFBQVduQixVQUFVSSxJQWhCUjtBQWlCYmdCLGNBQVlwQixVQUFVSSxJQWpCVDtBQWtCYmlCLG1CQUFpQnJCLFVBQVVJLElBbEJkO0FBbUJia0IsaUJBQWV0QixVQUFVVSxLQW5CWjtBQW9CYmEsbUJBQWlCdkIsVUFBVVUsS0FwQmQ7QUFxQmJjLGtCQUFnQnhCLFVBQVVVLEtBckJiO0FBc0JiZSxtQkFBaUJ6QixVQUFVMEIsTUF0QmQ7QUF1QmJDLHVCQUFxQjNCLFVBQVU0QixJQXZCbEI7QUF3QmJD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QWU5SCxVQUFVNkUsV0FqS1o7QUFrS2JrRCxvQkFBa0IvSCxVQUFVNkUsV0FsS2Y7QUFtS2JtRCxtQkFBaUJoSSxVQUFVNkUsV0FuS2Q7QUFvS2JvRCxvQkFBa0JqSSxVQUFVNkUsV0FwS2Y7QUFxS2JxRCxtQkFBaUJsSSxVQUFVNkU7QUFyS2QsQ0FBZiIsImZpbGUiOiJwcm9wVHlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gR2VuZXJhbFxuICBkYXRhOiBQcm9wVHlwZXMuYW55LFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd1BhZ2luYXRpb246IFByb3BUeXBlcy5ib29sLFxuICBzaG93UGFnaW5hdGlvblRvcDogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dQYWdpbmF0aW9uQm90dG9tOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd1BhZ2VTaXplT3B0aW9uczogUHJvcFR5cGVzLmJvb2wsXG4gIHBhZ2VTaXplT3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICBkZWZhdWx0UGFnZVNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNob3dQYWdlSnVtcDogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbGxhcHNlT25Tb3J0aW5nQ2hhbmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY29sbGFwc2VPblBhZ2VDaGFuZ2U6IFByb3BUeXBlcy5ib29sLFxuICBjb2xsYXBzZU9uRGF0YUNoYW5nZTogUHJvcFR5cGVzLmJvb2wsXG4gIGZyZWV6ZVdoZW5FeHBhbmRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHNvcnRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcmVzaXphYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZmlsdGVyYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRTb3J0RGVzYzogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRTb3J0ZWQ6IFByb3BUeXBlcy5hcnJheSxcbiAgZGVmYXVsdEZpbHRlcmVkOiBQcm9wVHlwZXMuYXJyYXksXG4gIGRlZmF1bHRSZXNpemVkOiBQcm9wVHlwZXMuYXJyYXksXG4gIGRlZmF1bHRFeHBhbmRlZDogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGVmYXVsdEZpbHRlck1ldGhvZDogUHJvcFR5cGVzLmZ1bmMsXG4gIGRlZmF1bHRTb3J0TWV0aG9kOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvLyBDb250cm9sbGVkIFN0YXRlIENhbGxiYWNrc1xuICBvblBhZ2VDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblBhZ2VTaXplQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Tb3J0ZWRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZpbHRlcmVkQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25SZXNpemVkQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25FeHBhbmRlZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLy8gUGl2b3RpbmdcbiAgcGl2b3RCeTogUHJvcFR5cGVzLmFycmF5LFxuXG4gIC8vIEtleSBDb25zdGFudHNcbiAgcGl2b3RWYWxLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBpdm90SURLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN1YlJvd3NLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFnZ3JlZ2F0ZWRLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5lc3RpbmdMZXZlbEtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3JpZ2luYWxLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGluZGV4S2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBncm91cGVkQnlQaXZvdEtleTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvLyBTZXJ2ZXItc2lkZSBDYWxsYmFja3NcbiAgb25GZXRjaERhdGE6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8vIENsYXNzZXNcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvLyBDb21wb25lbnQgZGVjb3JhdG9yc1xuICBnZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRhYmxlUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRUaGVhZEdyb3VwUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRUaGVhZEdyb3VwVHJQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRoZWFkR3JvdXBUaFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0VGhlYWRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRoZWFkVHJQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRoZWFkVGhQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRoZWFkRmlsdGVyUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRUaGVhZEZpbHRlclRyUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRUaGVhZEZpbHRlclRoUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRUYm9keVByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0VHJHcm91cFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0VHJQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRkUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRUZm9vdFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0VGZvb3RUclByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0VGZvb3RUZFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0UGFnaW5hdGlvblByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0TG9hZGluZ1Byb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0Tm9EYXRhUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRSZXNpemVyUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8vIEdsb2JhbCBDb2x1bW4gRGVmYXVsdHNcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIC8vIFJlbmRlcmVyc1xuICAgICAgQ2VsbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50VHlwZV0pLFxuICAgICAgSGVhZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRUeXBlXSksXG4gICAgICBGb290ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudFR5cGVdKSxcbiAgICAgIEFnZ3JlZ2F0ZWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudFR5cGVdKSxcbiAgICAgIFBpdm90OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRUeXBlXSksXG4gICAgICBQaXZvdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRUeXBlXSksXG4gICAgICBFeHBhbmRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50VHlwZV0pLFxuICAgICAgRmlsdGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmVsZW1lbnRUeXBlXSksXG5cbiAgICAgIC8vIEFsbCBDb2x1bW5zXG4gICAgICBzb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wsIC8vIHVzZSB0YWJsZSBkZWZhdWx0XG4gICAgICByZXNpemFibGU6IFByb3BUeXBlcy5ib29sLCAvLyB1c2UgdGFibGUgZGVmYXVsdFxuICAgICAgZmlsdGVyYWJsZTogUHJvcFR5cGVzLmJvb2wsIC8vIHVzZSB0YWJsZSBkZWZhdWx0XG4gICAgICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIG1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbWluUmVzaXplV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAgIC8vIENlbGxzIG9ubHlcbiAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgZ2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgICAvLyBQaXZvdCBvbmx5XG4gICAgICBhZ2dyZWdhdGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgICAvLyBIZWFkZXJzIG9ubHlcbiAgICAgIGhlYWRlckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGhlYWRlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgZ2V0SGVhZGVyUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgICAvLyBGb290ZXJzIG9ubHlcbiAgICAgIGZvb3RlckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGZvb3RlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgZ2V0Rm9vdGVyUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgZmlsdGVyTWV0aG9kOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGZpbHRlckFsbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBzb3J0TWV0aG9kOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB9KVxuICApLFxuXG4gIC8vIEdsb2JhbCBFeHBhbmRlciBDb2x1bW4gRGVmYXVsdHNcbiAgZXhwYW5kZXJEZWZhdWx0czogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVzaXphYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmaWx0ZXJhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG5cbiAgcGl2b3REZWZhdWx0czogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvLyBUZXh0XG4gIHByZXZpb3VzVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIG5leHRUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgbG9hZGluZ1RleHQ6IFByb3BUeXBlcy5ub2RlLFxuICBub0RhdGFUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgcGFnZVRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICBvZlRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICByb3dzVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIHBhZ2VKdW1wVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIHJvd3NTZWxlY3RvclRleHQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8vIENvbXBvbmVudHNcbiAgVGFibGVDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgVGhlYWRDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgVGJvZHlDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgVHJHcm91cENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBUckNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBUaENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBUZENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBUZm9vdENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBGaWx0ZXJDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgRXhwYW5kZXJDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgUGl2b3RWYWx1ZUNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBBZ2dyZWdhdGVkQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG4gIC8vIHRoaXMgaXMgYSBjb21wdXRlZCBkZWZhdWx0IGdlbmVyYXRlZCB1c2luZ1xuICBQaXZvdENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICAvLyB0aGUgRXhwYW5kZXJDb21wb25lbnQgYW5kIFBpdm90VmFsdWVDb21wb25lbnQgYXQgcnVuLXRpbWUgaW4gbWV0aG9kcy5qc1xuICBQYWdpbmF0aW9uQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG4gIFByZXZpb3VzQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG4gIE5leHRDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgTG9hZGluZ0NvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBOb0RhdGFDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgUmVzaXplckNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBQYWRSb3dDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbn1cbiJdfQ==